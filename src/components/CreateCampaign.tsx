import { useContext, useState } from "react";
import { ClientContext } from "../context/Context";
import { canister } from "../utils/canister";
import { createCampaign, fetchCampaigns } from "../utils/methods";
import { motion } from "framer-motion";

const CreateCampaign = () => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [target, setTarget] = useState<string>('');
  const [date, setDate] = useState<Date | null>(null);

  const client = useContext(ClientContext);

  const handleTargetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const pattern = /^\d*\.?\d*$/;

    if (pattern.test(value)) {
      setTarget(value);
    }
  };

  const handleCreateCampaign = async () => {
    const success = await createCampaign(
      client?.user?.username || "Anonymous",
      title,
      description,
      parseFloat(target),
      date ? Math.floor(date.getTime() * 1000000) : 0,
    );
    if (success) {
      alert("Campaign created successfully");
      client?.setActivePage("");
      await fetchCampaigns().then((data) => {
        client?.setAllCampaigns(data);
      })
    }
    else {
      alert("Failed to create campaign");
    }
  }

  const handleCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Prevent the click event from propagating to the background
    e.stopPropagation();
  };

  return (
    <>
      <div
        className="flex fixed bg-black bg-opacity-50 w-screen h-screen backdrop-blur-sm items-center justify-center"
        onClick={() => client?.setActivePage('')}
      >
        <motion.div
          className="min-w-[25rem] min-h-[20vh] p-10 flex flex-col bg-white shadow-lg opacity-90 z-10"
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ type: 'spring' }}
          onClick={handleCardClick} // Stop propagation here
        >
          <div className="mb-5 text-xl text-center">New Campaign</div>
          <div className="mb-1 text-xs">Campaign Title</div>
          <input
            className="py-1 px-3 border border-black rounded-md mb-5"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
          />
          <div className="mb-1 text-xs">Campaign Description</div>
          <textarea
            className="py-1 px-3 border border-black rounded-md mb-5"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div className="mb-1 text-xs">Target Fund (in ICP)</div>
          <input
            className="py-1 px-3 border border-black rounded-md mb-5"
            type="text"
            value={target}
            onChange={handleTargetChange}
          />
          <div className="mb-1 text-xs">Due Date</div>
          <input
            placeholder="Due Date"
            className="py-1 px-3 border border-black rounded-md mb-5"
            type="date"
            value={date ? date.toISOString().split('T')[0] : ''}
            onChange={(e) =>
              setDate(e.target.value ? new Date(e.target.value) : null)
            }
          />
          {title && description && target && date && (
            <button
              className="bg-black text-white p-2 rounded-lg"
              onClick={handleCreateCampaign}
            >
              Create Campaign
            </button>
          )}
        </motion.div>
      </div>
    </>
  );
};

export default CreateCampaign;

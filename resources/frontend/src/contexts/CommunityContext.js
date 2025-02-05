import React, { createContext, useCallback, useContext, useState } from "react";

const CommunityContext = createContext(null);

export const CommunityProvider = ({ children }) => {
    const [showCommunityEditor, setShowCommunityEditor] = useState(false);
    const [preSetCommunityName, setPreSetCommunityName] = useState("");
    const [showChannelEditor, setShowChannelEditor] = useState(false);
    const [preSetCommunityId, setPreSetCommunityId] = useState(0);
    const [schannels, setSchannels] = useState({})

    const handleAddSChannels = useCallback((id) => {
        if (schannels[id] && Number.isInteger(schannels[id])) setSchannels({ ...schannels, [id]: schannels[id] + 1 })
        else setSchannels({ ...schannels, [id]: 1 })
    }, [schannels])
    const handleClearSChannels = useCallback((id) => {
        if (schannels[id] && Number.isInteger(schannels[id])) setSchannels({ ...schannels, [id]: 0 })
    }, [schannels])

    return (
        <CommunityContext.Provider
            value={{
                showCommunityEditor,
                setShowCommunityEditor,
                preSetCommunityName,
                setPreSetCommunityName,
                showChannelEditor,
                setShowChannelEditor,
                preSetCommunityId,
                setPreSetCommunityId,
                schannels,
                setSchannels,
                handleAddSChannels,
                handleClearSChannels
            }}
        >
            {children}
        </CommunityContext.Provider>
    );
};

export const useCommunity = () => useContext(CommunityContext);

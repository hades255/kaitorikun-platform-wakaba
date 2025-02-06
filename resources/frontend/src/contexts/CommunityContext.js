import React, { createContext, useCallback, useContext, useState } from "react";

const CommunityContext = createContext(null);

export const CommunityProvider = ({ children }) => {
    const [showCommunityEditor, setShowCommunityEditor] = useState(false);
    const [preSetCommunityName, setPreSetCommunityName] = useState("");
    const [showChannelEditor, setShowChannelEditor] = useState(false);
    const [preSetCommunityId, setPreSetCommunityId] = useState(0);

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
            }}
        >
            {children}
        </CommunityContext.Provider>
    );
};

export const useCommunity = () => useContext(CommunityContext);

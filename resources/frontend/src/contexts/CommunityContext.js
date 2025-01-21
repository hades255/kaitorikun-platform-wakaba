import React, { createContext, useContext, useEffect, useState } from "react";

const CommunityContext = createContext(null);

export const CommunityProvider = ({ children }) => {
    const [showCommunityEditor, setShowCommunityEditor] = useState(false);
    const [preSetCommunityName, setPreSetCommunityName] = useState("");
    const [showChannelEditor, setShowChannelEditor] = useState(false);

    return (
        <CommunityContext.Provider
            value={{
                showCommunityEditor,
                setShowCommunityEditor,
                preSetCommunityName,
                setPreSetCommunityName,
                showChannelEditor,
                setShowChannelEditor,
            }}
        >
            {children}
        </CommunityContext.Provider>
    );
};

export const useCommunity = () => useContext(CommunityContext);

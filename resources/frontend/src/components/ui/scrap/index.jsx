import React, { useState, useEffect } from "react"
export default function Scrap() {
    return (
        <div className="scrap-result flex items-center gap-4 dark-orange font-bold">
            <div className="au-cost">
                <span>Au</span>
                <span className="cost pl-1">99,000</span>
            </div>
            <div className="ag-cost">
                <span>Ag</span>
                <span className="cost pl-1">99,000</span>
            </div>
            <div className="pt-cost">
                <span>Pt</span>
                <span className="cost pl-1">99,000</span>
            </div>
        </div>
    )
}
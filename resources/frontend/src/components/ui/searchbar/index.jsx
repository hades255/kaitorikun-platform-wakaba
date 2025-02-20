import React from "react"
import OutlinedInput from "@mui/material/OutlinedInput"
import InputAdornment from "@mui/material/InputAdornment"
import IconButton from "@mui/material/IconButton"
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar(props) {
    const handleSearch = () => {
        props.onHandleSearchClick
    }
    return (
        <React.Fragment>
            <OutlinedInput
                id="search-bar"
                type="text"
                size="small"
                placeholder="検索"
                className="filter-field"
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="search-bar"
                            edge="end"
                            onClick={handleSearch}
                        >
                            <SearchIcon />
                        </IconButton>
                    </InputAdornment>
                }
            />
        </React.Fragment>
    )
}
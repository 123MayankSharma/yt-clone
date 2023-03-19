import {Button, Stack} from "@mui/material"
import {categories} from "../utils/constants"
import {useState} from "react"

const Sidebar=({category,setCategory})=>{
    return(
        <Stack
         direction="row"
         sx={{
             overflowY: "auto",
             height: { sx: "auto", md: "95%" },
             flexDirection: { md: "column" },
         }} 
        >
        {categories.map((categ) => (
          <Button
            className="category-btn"
            onClick={() => setCategory(categ.name)}
            style={{
              background: categ.name === category && "#131313",
              color: "white",
            }}
            key={category.name}
          >
            <span style={{ color: category.name === category ? "white" : "#e3e3e3", marginRight: "15px" }}>
              {categ.icon}
            </span>
            <span style={{ opacity: category.name === category ? "1" : "0.8" }}>
              {categ.name}
            </span>
          </Button>
        ))}       
    </Stack>
    )


}

export default Sidebar

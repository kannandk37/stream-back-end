// import { SearchPicker } from "@/design/components/autosearch/element";
import { DesignIconsSearchOutlineIcon } from "@/design/icons/search/outline";
import { useState } from "react";
import { makeStyles } from "tss-react/mui";

const payers = [
  { id: '101', label: 'Out of Network' },
  { id: '102', label: 'Invalid CPT' },
  { id: '103', label: 'Preferred Provider' },
];

export const Autosearch = () => {
  const [selectedValue, setSelectedValue] = useState(null);
  const [inputValue, setInputValue] = useState('');

  return (
    <div style={{ margin: '20px' }} >
      {/* <SearchPicker
        options={payers}
        value={selectedValue}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => setInputValue(newInputValue)}
        onChange={(option) => setSelectedValue(option)}
        minWidth="300px"
        maxWidth="300px"
        placeholder="Action required"
        startIcon={<DesignIconsSearchOutlineIcon color="var(--grey-20)" />}
        hasPopupIcon={false}
      /> */}
    </div>
  );
};
export const useStyles = makeStyles()(() => {

})
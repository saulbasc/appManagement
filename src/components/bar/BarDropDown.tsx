import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";

const BarDropDown = () => {
    const [selected, setSelected] = useState();
    const data = [
        {key: '1', value:'Español'},
        {key: '2', value:'Inglés'},
    ]
    return (
        <SelectList inputStyles={styles.content}
            search={false}
            placeholder="Idioma"
            setSelected={(val: any) => setSelected(val)}
            data={data}
            save="value"
        />
    );
}

const styles = StyleSheet.create({
    content: {
        flexDirection: "row",
    }
});

export default BarDropDown;
import React, { useState } from "react";
import { NumberInput } from "grommet-controls";
import { Box, CheckBox, Select, Button, Form, FormField } from "grommet";
import { drinks, beers, wines, cups } from "./constants";

export default function InputForm() {
  const [drinkType, setDrinkType] = useState({ type: "beer", name: "Bia" });
  const [beerType, setBeerType] = useState({});
  const [wineType, setWineType] = useState({});
  const [cupType, setCupType] = useState({});

  return (
    <Box fill align="center" justify="center">
      <Box width="medium">
        <Form
          onReset={event => console.log(event)}
          onSubmit={({ value, touched }) =>
            console.log("Submit", value, touched)
          }
        >
          <FormField name="Giới tính" label="Giới tính">
            <Box
              direction="row"
              align="center"
              justify="center"
              gap="medium"
              margin={{ top: "20px", bottom: "20px" }}
            >
              <div>Nam</div>
              <CheckBox toggle />
              <div>Nữ</div>
            </Box>
          </FormField>
          <FormField
            label="Tuổi"
            name="Tuổi"
            required
            component={NumberInput}
            step={1}
          />
          <FormField
            label="Cân Nặng (kg)"
            name="Cân Nặng"
            required
            component={NumberInput}
            step={1}
          />
          <FormField
            label="Chiều cao (cm)"
            name="Chiều cao"
            required
            component={NumberInput}
            step={1}
          />
          <FormField
            label="Đồ uống"
            name="Đồ uống"
            required
            component={Select}
            options={drinks}
            labelKey="name"
            valueKey="type"
            value={drinkType}
            onChange={({ option }) => setDrinkType(option)}
          />
          {drinkType.type === "beer" && (
            <>
              <FormField
                label="Hãng bia"
                name="Hãng bia"
                required={drinkType.type === "beer"}
                component={Select}
                options={beers}
                value={beerType}
                onChange={({ option }) => setBeerType(option)}
                labelKey="name"
                valueKey="name"
                name="Hãng bia"
              />
            </>
          )}
          {drinkType.type === "wine" && (
            <>
              <FormField
                label="Loại rượu"
                name="Loại rượu"
                required={drinkType.type === "beer"}
                component={Select}
                options={wines}
                value={wineType}
                onChange={({ option }) => setWineType(option)}
                labelKey="name"
                valueKey="name"
              />
              <FormField
                label="Loại ly"
                name="Loại ly"
                required={drinkType.type === "beer"}
                component={Select}
                options={cups}
                value={cupType}
                onChange={({ option }) => setCupType(option)}
                labelKey="name"
                valueKey="name"
              />
            </>
          )}
          <FormField
            label="Số lượng (lon/ly)"
            name="Số lượng"
            required
            component={NumberInput}
            step={1}
          />
          <FormField
            label="Thời gian (phút)"
            name="Thời gian"
            required
            component={NumberInput}
            step={1}
          />
          <Box direction="row" justify="between" margin={{ top: "medium" }}>
            <Button type="submit" label="Tính Nồng Độ Cồn" primary />
            <Button type="reset" label="Reset" />
          </Box>
        </Form>
      </Box>
    </Box>
  );
}

import React, { useState } from "react";
import { NumberInput } from "grommet-controls";
import { Box, CheckBox, Select, Button, Form, FormField } from "grommet";
import { drinks, beers, wines, cups } from "./constants";

export default function InputForm({ formValues }) {
  const [drinkType, setDrinkType] = useState({ type: "beer", name: "Bia" });
  const [beerType, setBeerType] = useState({});
  const [wineType, setWineType] = useState({});
  const [cupType, setCupType] = useState({});
  const [sex, setSex] = useState(false);

  return (
    <Box align="center" justify="center" background="#ffffff" elevation="small" round="small">
      <Form
        // onReset={event => console.log(event)}
        onSubmit={({ value, touched }) => formValues({ ...value, sex })}
      >
        <Box direction="row-responsive">
          <Box width="medium" pad="medium">
            <FormField
              label="Tuổi"
              name="age"
              required
              component={NumberInput}
              step={1}
              defaultValue={1}
            />
            <FormField
              label="Cân Nặng (kg)"
              name="weight"
              required
              component={NumberInput}
              step={1}
              defaultValue={1}
            />
            <FormField
              label="Chiều cao (cm)"
              name="height"
              required
              component={NumberInput}
              step={1}
              defaultValue={1}
            />
            <FormField
              label="Giới tính"
              help={<small>Men go the left, because women are always right</small>}
            >
              <Box
                direction="row"
                align="center"
                justify="center"
                gap="medium"
                margin={{ top: "10px", bottom: "12px" }}
              >
                <div>Nam</div>
                <CheckBox toggle value={sex} onChange={e => setSex(e.target.checked)} />
                <div>Nữ</div>
              </Box>
            </FormField>
          </Box>
          <Box width="medium" pad="medium">
            <FormField
              label="Đồ uống"
              name="drink"
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
                  name="beer"
                  required={drinkType.type === "beer"}
                  component={Select}
                  options={beers}
                  value={beerType}
                  onChange={({ option }) => setBeerType(option)}
                  labelKey="name"
                  valueKey="name"
                />
              </>
            )}
            {drinkType.type === "wine" && (
              <>
                <FormField
                  label="Loại rượu"
                  name="wine"
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
                  name="cup"
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
              name="amount"
              required
              component={NumberInput}
              step={1}
              defaultValue={1}
            />
            <FormField
              label="Thời gian (phút)"
              name="time"
              required
              component={NumberInput}
              step={1}
              defaultValue={1}
              help={<small>Tính từ lúc uống hết giọt cuối cùng</small>}
            />
          </Box>
        </Box>

        <Box direction="row" justify="between" pad="medium">
          <Button type="submit" label="Tính Nồng Độ Cồn" primary />
          <Button type="reset" label="Reset" />
        </Box>
      </Form>
    </Box>
  );
}

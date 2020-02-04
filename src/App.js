import React, { useState } from "react";
import "./App.css";
import InputForm from "./InputForm";
import { Grommet, Box, Text, Clock, Grid } from "grommet";
import { Alert, Bar } from "grommet-icons";
import { calcResult } from "./service";

function App() {
  const [alcohol, setAlcohol] = useState({});
  const calcAlcohol = value => {
    const result = calcResult(value);
    setAlcohol(result);
  };

  const ValueMeter = ({ value, label }) => {
    return (
      <Grid
        columns={{
          count: 2,
          size: "auto"
        }}
        gap="small"
        margin={{ bottom: "6px" }}
      >
        <Box height={{ min: "36px" }} direction="column" justify="end">
          <Text textAlign="end">{label}</Text>
        </Box>
        <Box height={{ min: "36px" }} direction="column" justify="end">
          <Text textAlign="start" size="xlarge">
            {value}
          </Text>
        </Box>
      </Grid>
    );
  };

  const Result = ({ alcohol }) => {
    return (
      <>
        <Box
          fill
          elevation="small"
          round="small"
          pad="medium"
          background="#ffffff"
          width={{ max: "large" }}
          margin={{ top: "20px" }}
        >
          <ValueMeter value={`${alcohol.outputIngestedMl} ml`} label={"Đã uống vào"} />
          <ValueMeter
            value={`${alcohol.outputRemainingMl} ml`}
            label={`Sau ${alcohol.time} phút, còn lại trong cơ thể`}
          />
          <ValueMeter value={`${alcohol.outputBAC} %`} label={"Nồng độ cồn trong máu"} />
        </Box>
        <Box
          fill
          elevation="small"
          round="small"
          pad="medium"
          background="#ffffff"
          width={{ max: "large" }}
          margin={{ top: "20px" }}
          border={{ color: "brand", size: "small" }}
        >
          {alcohol.outputBAC > 0 && (
            <Box margin={{ top: "12px" }}>
              {alcohol.outputBAC > 0.12 && (
                <Text textAlign="center" size="large" margin={{ bottom: "8px" }}>
                  Toang rồi toang rồi ~~
                </Text>
              )}
              <Text textAlign="center">
                Nghỉ ngơi ít nhất{" "}
                <Text weight="bold" size="large">
                  {alcohol.minutesToOhFive} phút
                </Text>{" "}
                rồi lên đường thông chốt nhé người anh em thiện lành!!!
              </Text>
            </Box>
          )}
          {alcohol.outputBAC <= 0 && (
            <Box margin={{ top: "12px" }}>
              <Text textAlign="center" size="large">
                Theo tính toán thì bạn có thể lên đường ngay, nhưng mà nhớ là phải đi đứng cẩn thận
                nhé.
              </Text>
            </Box>
          )}
        </Box>
      </>
    );
  };

  const Header = () => {
    return (
      <Box
        elevation="small"
        round="small"
        pad="medium"
        background="#ffffff"
        width={{ max: "large" }}
        margin={{ bottom: "20px" }}
        align="center"
      >
        <Box direction="row" justify="center">
          <Box width={{ min: "32px", max: "32px" }}>
            <Bar color="status-warning" />
          </Box>
          <Box width={{ min: "32px", max: "32px" }}>
            <Bar color="status-warning" />
          </Box>
          <Box width={{ min: "32px", max: "32px" }}>
            <Bar color="status-warning" />
          </Box>
          <Box width={{ min: "32px", max: "32px" }}>
            <Bar color="status-warning" />
          </Box>
          <Box width={{ min: "32px", max: "32px" }}>
            <Bar color="status-warning" />
          </Box>
        </Box>
        <Box margin={{ top: "20px" }}>
          <Text weight="bold" size="large" textAlign="center">
            Ứng dụng ước tính nồng độ cồn giúp anh em biết mình đang bay ở tầng mây nào ^^
          </Text>
        </Box>
      </Box>
    );
  };

  const Warning = () => {
    return (
      <Box
        direction="row"
        elevation="small"
        round="small"
        pad="medium"
        background="#ffffff"
        width={{ max: "large" }}
        margin={{ bottom: "20px" }}
      >
        <Box width={{ min: "64px", max: "64px" }}>
          <Alert color="status-warning" size="large" />
        </Box>
        <Box>
          <Text color="status-warning" weight="bold">
            LƯU Ý CỰC MẠNH!!!
          </Text>
          <Text>
            Kết quả ước tính nồng độ cồn trong hơi thở chỉ mang tính chất tham khảo và không hoàn
            toàn chính xác vì những yếu tố khách quan như thể trạng sức khỏe mỗi người, các yếu tố
            di truyền,... Anh em có thể dựa vào kết quả ước tính để nghỉ ngơi cho tỉnh táo trước khi
            tham gia giao thông hoặc KHÔNG nên uống rượu bia khi tham gia giao thông.
          </Text>
        </Box>
      </Box>
    );
  };

  return (
    <Grommet>
      <Box fill align="center">
        <Box width={{ max: "large" }} align="center" margin="medium">
          <Box pad={{ bottom: "20px" }} fill direction="row" justify="center">
            <Clock type="digital" />
          </Box>
          <Header />
          <Warning />
          <InputForm formValues={value => calcAlcohol(value)} />
          {alcohol.outputIngestedMl && <Result alcohol={alcohol} />}
        </Box>

        <Box pad={{ top: "20px", bottom: "20px" }}>
          <Text>Made by Quang Son with ❤</Text>
        </Box>

        <Box pad={{ bottom: "20px" }}>
          <Text textAlign="center">Tham khảo:</Text>
          <a
            href="https://www.wikihow.com/Calculate-Blood-Alcohol-Content-(Widmark-Formula)"
            target="blank"
          >
            How to Calculate Blood Alcohol Content (Widmark Formula)
          </a>
        </Box>
      </Box>
    </Grommet>
  );
}

export default App;

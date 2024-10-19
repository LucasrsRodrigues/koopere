import React from "react";
import { SelectList, type SelectListProps } from "react-native-dropdown-select-list";

import { useTheme } from "styled-components/native";


import * as S from "./styles";

interface ISelectProps extends SelectListProps {
  data: Array<{ key: string, value: string }>
}

export function Select({ data, ...rest }: ISelectProps) {
  const theme = useTheme();

  return (
    <SelectList
      data={data}
      save="value"
      {...rest}
      boxStyles={{
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: theme?.colors?.inputBorder,
      }}
      dropdownStyles={{
        borderColor: theme?.colors?.inputBorder,
      }}
      inputStyles={{
        color: theme?.colors?.inputText,
      }}
      dropdownTextStyles={{
        color: theme?.colors?.inputText
      }}
    />
  );
}

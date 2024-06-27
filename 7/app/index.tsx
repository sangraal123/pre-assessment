import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

// プログラム内のデータ型を定義
type DataType = (number | string)[][];
type CellType = number | string;
type RowIndexType = number;
type ColIndexType = number;

const App = () => {
  const [tableData, setTableData] = useState<DataType>([]);
  const [highlightedNumber, setHighlightedNumber] = useState<CellType | null>(
    null
  );

  useEffect(() => {
    generateMultiplicationTable();
  }, []);

  const generateMultiplicationTable = () => {
    let data: DataType = [];
    for (let row: RowIndexType = 0; row <= 12; row++) {
      let rowData: CellType[] = [];
      for (let col: ColIndexType = 0; col <= 12; col++) {
        if (row === 0 && col === 0) {
          rowData.push("X");
        } else if (row === 0) {
          rowData.push(col);
        } else if (col === 0) {
          rowData.push(row);
        } else {
          rowData.push(col * row);
        }
      }
      data.push(rowData);
    }
    setTableData(data);
  };

  const handleCellClick = (number: CellType) => {
    setHighlightedNumber(number);
    console.log(`Clicked number: ${number}`);
  };

  return (
    <View style={styles.container}>
      {tableData.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((cell, colIndex) => (
            <TouchableOpacity
              key={colIndex}
              style={[
                styles.cell,
                cell === highlightedNumber ? styles.highlightedCell : null,
                rowIndex === 0 || colIndex === 0 ? styles.headerCell : null,
              ]}
              onPress={() => {
                if (rowIndex !== 0 && colIndex !== 0) {
                  handleCellClick(cell);
                }
              }}
            >
              <Text style={styles.cellText}>{cell}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  tableContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  row: {
    flexDirection: "row",
  },
  cell: {
    borderWidth: 1,
    borderColor: "black",
    width: 40, // Fixed width
    height: 40, // Fixed height
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },
  headerCell: {
    backgroundColor: "#FFA500",
  },
  highlightedCell: {
    backgroundColor: "#FFFF00",
  },
  cellText: {
    textAlign: "center",
  },
});

export default App;

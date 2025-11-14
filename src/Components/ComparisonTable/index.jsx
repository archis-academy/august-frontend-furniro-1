
import styles from "./comparisonTable.module.scss";

const data = {
  General: [
    { label: "Sales Package", values: ["1 sectional sofa", "1 Three Seater, 2 Single Seater"] },
    { label: "Model Number", values: ["TFCBU6BL685RHS", "DTUBLGRBL68"] },
    { label: "Secondary Material", values: ["Solid Wood", "Solid Wood"] },
    { label: "Configuration", values: ["L-shaped", "L-shaped"] },
    { label: "Upholstery Material", values: ["Fabric + Cotton", "Fabric + Cotton"] },
    { label: "Upholstery Color", values: ["Bright Grey & Lion", "Bright Grey & Lion"] },
  ],
  Product: [
    { label: "Filling Material", values: ["Foam", "Matte"] },
    { label: "Finish Type", values: ["Bright Grey & Lion", "Bright Grey & Lion"] },
    { label: "Adjustable Headrest", values: ["No", "Yes"] },
    { label: "Maximum Load Capacity", values: ["280 KG", "300 KG"] },
    { label: "Origin of Manufacture", values: ["India", "India"] },
  ],
  Dimensions: [
    { label: "Width", values: ["265.32 cm", "265.32 cm"] },
    { label: "Height", values: ["76 cm", "76 cm"] },
    { label: "Depth", values: ["167.76 cm", "157.76 cm"] },
    { label: "Weight", values: ["45 KG", "65 KG"] },
    { label: "Seat Height", values: ["41.52 cm", "41.52 cm"] },
    { label: "Leg Height", values: ["5.46 cm", "5.46 cm"] },
  ],
  Warranty: [
    { label: "Warranty Summary", values: ["1 Year Manufacturing Warranty", "1.2 Year Manufacturing Warranty"] },
    {
      label: "Warranty Service Type",
      values: [
        "For Warranty Claims or Any Product Related Issues Please Email at operations@revifurniture.com",
        "For Warranty Claims or Any Product Related Issues Please Email at support@xyz.com",
      ],
    },
    {
      label: "Covered in Warranty",
      values: [
        "Warranty Against Manufacturing Defect",
        "Warranty of the product is limited to manufacturing defects only.",
      ],
    },
    {
      label: "Not Covered in Warranty",
      values: [
        "The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.",
        "The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.",
      ],
    },
    { label: "Domestic Warranty", values: ["1 Year", "3 Months"] },
  ],
};

export default function ComparisonTable() {
  return (
    <div className={styles.tableContainer}>
      {Object.entries(data).map(([section, items, index]) => (
        <div key={index} className={styles.section}>
          <h2 className={styles.sectionTitle}>{section}</h2>
          <div className={styles.rows}>
            {items.map((item) => (
              <div key={item.label} className={styles.row}>
                <div className={styles.label}>{item.label}</div>
                <div className={styles.value}>{item.values[0]}</div>
                <div className={styles.value}>{item.values[1]}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

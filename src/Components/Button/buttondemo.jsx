import Buttons from "./button";

export default function ButtonDemo() {
    return (
        <>
            <Buttons variant="primary" text="1" />
            <Buttons variant="secondary" text="2" />
            <Buttons variant="tertiary" text="Show More" />
            <Buttons variant="quaternary" text="Add to Cart" />
        </>
    )
}
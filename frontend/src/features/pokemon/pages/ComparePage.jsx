import CompareModal from "../components/CompareModal";
import RandomPokemonBtn from "../components/RandomPokemonButton"; // Import the button component
import useCompare from "../hooks/useCompare";
function ComparePage() {

    const { compare, loading, genTwoRandomNum } = useCompare(); // Import the function to generate random Pokemon numbers
    console.log("compare", compare); // Log the compare array to check its contents

    return (

        <>
            <CompareModal loading={loading} compare={compare} />
            <RandomPokemonBtn handleClick={genTwoRandomNum} />
        </>
    );
}

export default ComparePage;
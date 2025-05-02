import { useState, useEffect } from "react";
import axios from "axios";

function useCompare() {

    const [compare, setCompare] = useState([]);
    const [twoRandNum, setTwoRandNum] = useState([1, 2]);
    const [loading, setLoading] = useState(false);

    const genTwoRandomNum = () => {
      console.log("Generating two random numbers...");
      
        setCompare([]);
        // Generate two random numbers between 1 and 150
        const num1 = Math.floor(Math.random() * 150) + 1;
        let num2;
        do {
            num2 = Math.floor(Math.random() * 150) + 1;
        } while (num1 === num2);
        setTwoRandNum([num1, num2]);
        return [num1, num2];
    }

    useEffect(() => {
        const fetchComparePokemonDetails = async () => {
          console.log("Fetching Pokemon details...");
          setLoading(true);
            try {
                const responses = await Promise.all(
                twoRandNum.map((num) => axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`))
                );
                console.log("Fetched Pokemon data:", responses.map((res) => res.data));
                
                setCompare(responses.map((res) => res.data));
              setLoading(false);
            } catch (error) {
              console.error('Error fetching Pokemon details:', error);
              setLoading(false);
            }
          };

          fetchComparePokemonDetails();
    }, [twoRandNum]);

    return {
        compare,
        genTwoRandomNum,
        twoRandNum,
        loading,
    };
}

export default useCompare;
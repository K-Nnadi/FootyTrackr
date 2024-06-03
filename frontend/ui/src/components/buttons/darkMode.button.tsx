import {Button, useComputedColorScheme, useMantineColorScheme} from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import { FaMoon, FaSun } from 'react-icons/fa';

export function DarkModeButton() {
    const [appColourScheme, setAppColourScheme] = useLocalStorage({
        key: 'color-scheme',
        defaultValue: 'dark',
    });

    const { setColorScheme } = useMantineColorScheme();
    // @ts-ignore
    const computedColourScheme: "dark" | "light" | undefined = useComputedColorScheme(appColourScheme);

    const toggleColourScheme = () => {
        const newColorScheme = computedColourScheme === 'dark' ? 'light' : 'dark';
        setColorScheme(newColorScheme);
        setAppColourScheme(newColorScheme);
    };

    return (
        <Button size={'xs'} onClick={toggleColourScheme}>
            {computedColourScheme === 'light' ? <FaMoon /> : <FaSun />}
        </Button>
    );
}


// export function DarkModeButton() {
//     const [colourScheme, setColourScheme] = useLocalStorage({
//         key: 'color-scheme',
//         defaultValue: 'dark',
//     });
//
//     const toggleColourScheme = () =>
//         setColourScheme(colourScheme === 'dark' ? 'light' : 'dark');
//
//     return (
//         <Button onClick={toggleColourScheme}>
//             {colourScheme === 'light' ? <FaMoon /> : <FaSun />}
//         </Button>
//     );
// }

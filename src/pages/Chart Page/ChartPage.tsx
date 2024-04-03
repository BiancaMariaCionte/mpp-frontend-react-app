import { useContext } from 'react';
import { UsersContext } from '../../contexts/UsersContext';
import { BarChart } from '@mui/x-charts';
import { Layout } from '../../components/layout/Layout';

export default function ChartPage() {
    const usersContext = useContext(UsersContext)!;
    const usersList = usersContext.moveClasses;

    // Calculate the frequency of each difficulty level
    const dificultyMap = new Map<number, number>();
    usersList.forEach((currentUser) => {
        const dificulty = currentUser.getDificulty();
        dificultyMap.set(dificulty, (dificultyMap.get(dificulty) || 0) + 1);
    });

    // Prepare data for the chart
    const chartData = Array.from(dificultyMap.values()); // Extract frequency values

    return (
        <Layout>
            <BarChart
                xAxis={[
                    {
                        id: 'dificulty',
                        data: [...dificultyMap.keys()],
                        scaleType: 'band',
                    },
                ]}
                series={[
                    {
                        data: chartData,
                    },
                ]}
                width={500}
                height={300}
            />
        </Layout>
    );
}



// import { useContext } from 'react';
// import { UsersContext } from '../../contexts/UsersContext';
// import { BarChart } from '@mui/x-charts';
// import { Layout } from '../../components/layout/Layout';

// export default function ChartPage() {
//     const usersContext = useContext(UsersContext)!;
//     const usersList = usersContext.moveClasses;

//     const dificultyMap = new Map<number, number>();

//     usersList.forEach((currentUser) => {
//         if (dificultyMap.get(currentUser.get()) === undefined) dificultyMap.set(currentUser.getDificulty(), 1);
//         else dificultyMap.set(currentUser.getDificulty(), dificultyMap.get(currentUser.getDificulty())! + 1);
//     });

//     console.log(dificultyMap);

//     return (
//         <Layout>
//             <BarChart
//                 xAxis={[
//                     {
//                         id: 'dificulty',
//                         data: [...dificultyMap.keys()],
//                         scaleType: 'band',
//                     },
//                 ]}
//                 series={[
//                     {
//                         data: [...dificultyMap.values()],
//                     },
//                 ]}
//                 width={500}
//                 height={300}
//             />
//         </Layout>
//     );
// }
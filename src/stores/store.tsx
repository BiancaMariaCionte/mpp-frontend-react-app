// import { create } from "zustand";
// import  {MoveClass} from "../models/MoveClass";
// import moveClassData from "../models/moveClassData";

// type State = {
//   opened: boolean;
//   elements: MoveClass[];
//   selectedElement: MoveClass;
// };

// type Actions = {
//   setElements: (elements: MoveClass[]) => void;
//   handleOpen: (element?: MoveClass) => void;
//   handleClose: () => void;
//   deleteElement: (elementId: number) => void;
//   addElement: (element: MoveClass) => void;
//   editElement: (element: MoveClass) => void;
//   resetElements: () => void;
// };

// const useElementStore = create<State & Actions>((set) => ({
//   opened: false,
//   selectedElement: {} as MoveClass,
//   elements: moveClassData,
//   resetElements: () => set({ elements: moveClassData }),
//   setElements: (elems: MoveClass[]) => set({ elements: elems }),
//   handleOpen: (element?: MoveClass) =>
//     set({ opened: true, selectedElement: element }),
//   editElement: (element: MoveClass) => {
//     set((state) => ({
//       elements: state.elements.map((d) =>
//         d.number === element.number ? element : d
//       ),
//     }));
//   },
//   handleClose: () => set({ opened: false, selectedElement: {} as MoveClass }),
//   addElement: (element: MoveClass) =>
//     set((state) => ({ elements: [...state.elements, element] })),
//   deleteElement: (elementId: number) =>
//     set((state) => ({
//       elements: state.elements.filter((d) => d.number !== elementId),
//     })),
// }));

// export default useElementStore;

import { useEffect, useState } from "react";

import { ContainerHeader } from "./styled";
import logoJussi from "../../assets/logoJussi.svg";
import shopMiniCart from "../../assets/shopping-cart.svg";
import { useFetch } from "../../context/useFetch";
import { Modal, Box, ListItem, ListItemText } from "@mui/material";

const style = {
   position: 'absolute' as 'absolute',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   width: 400,
   height: 400,
   bgcolor: 'background.paper',
   border: '2px solid #000',
   boxShadow: 24,
   p: 4,

};

const Header = () => {
   const { dataValue, getApi } = useFetch(),
      [valueInput, setValueInput] = useState(''),
      [searchResult, setSearchResult] = useState<string[]>([]),
      [isOpenModal, setIsOpenModal] = useState(false);

   useEffect(() => {
      getApi()
   }, []);

   useEffect(() => {
      const name = dataValue?.map((name: { title: string; }) => name.title.toLowerCase());
      const result = name?.filter((item: string[]) => item.includes(valueInput));
      setSearchResult(result);
   }, [valueInput]);



   return (
      <ContainerHeader>
         <div>
            <img src={logoJussi} alt="logo" />
            <ul>
               <li>Nossas soluções</li>
               <li>Conheça a Jüssi</li>
            </ul>
         </div>
         <div>
            <button className="btnOpenModal" onClick={() => setIsOpenModal(true)}>
               ({searchResult?.length}) <span>ver resultado de busca</span>
            </button>
            <input
               onChange={({ target }) => setValueInput(target.value)}
               value={valueInput}
               type="text"
               placeholder="buscar"
            />

            <Modal
               open={isOpenModal}
               onClose={() => setIsOpenModal(!isOpenModal)}
               aria-labelledby="simple-modal-title"
               aria-describedby="simple-modal-description"
            >
               <Box sx={{ ...style, overflowY: 'scroll' }}>
                  <h1>Search Results:</h1>

                  {searchResult?.map((result, i) => (
                     <ListItem
                        key={i}
                        disableGutters
                     >
                        <ListItemText primary={result} />
                     </ListItem>
                  ))}
               </Box>


            </Modal>

            <button>Login</button>
            <img src={shopMiniCart} alt="ico minicart" />
         </div>
      </ContainerHeader >
   );
};


export default Header;
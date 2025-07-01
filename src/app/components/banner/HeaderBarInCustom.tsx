import React from 'react';
import { HeaderBarIn, ItemMenuConfig } from 'pipesolcomponents';
import BarraFerramentasCustom from './BarraFerramentasCustom';
import Banner from './Banner';

interface HeaderBarInCustomProps{
  isXs: boolean; 
  isSm: boolean;
  itemsMenu: ItemMenuConfig[];   
}

const HeaderBarInCustom: React.FC<HeaderBarInCustomProps> = ({ isXs, isSm, itemsMenu}) => {                
        
    const height = (isXs) ? '850px' : (isSm ? '950px' : '800px') ;

    return (
       <HeaderBarIn background_color='transparent' border_radius="40px" top_bar={10}
            height_xs={height} height_sm={height} height_md={height} height_lg={height} height_xl={height}                
            renderBar={() => <BarraFerramentasCustom isXs={isXs} isSm={isSm} itens_menu={itemsMenu}></BarraFerramentasCustom>}
            renderBanner={() => <Banner isXs={isXs} isSm={isSm}></Banner>}>        
      </HeaderBarIn>
    );
                            
};

export default HeaderBarInCustom;
/* 渲染圖層:layer 1 的物件不會出現在水面反射裡(鏡面相機只看 layer 0)
   用在水花、燈塔光束這類「反射出來反而怪」或純粹浪費填充率的東西 */
export const NO_REFLECTION_LAYER = 1;

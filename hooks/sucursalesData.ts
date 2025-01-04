export interface Sucursal {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  address: string;
  phone: string;
  image: any;
}

export const sucursales: Sucursal[] = [
  {
    id: 1,
    name: "Sucursal 1",
    latitude: 37.78825,
    longitude: -122.4324,
    address: "123 Main St, San Francisco, CA",
    phone: "123-456-7890",
    image: require("../../assets/images/sucursal1.jpg"),
  },
  {
    id: 2,
    name: "Sucursal 2",
    latitude: 34.0522,
    longitude: -118.2437,
    address: "456 Elm St, Los Angeles, CA",
    phone: "987-654-3210",
    image: require("../../assets/images/sucursal2.jpg"),
  },
  // Agrega más sucursales aquí
];

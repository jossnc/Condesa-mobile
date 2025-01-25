import { Feather, Ionicons } from "@expo/vector-icons";

export const icons = {
    Home: (props: any) => <Feather name="home" size={24} {...props} />,
    Servicios: (props: any) => <Feather name="truck" size={24} {...props} />,
    Sucursal: (props: any) => <Ionicons name="storefront-outline" size={24} {...props} />,
};
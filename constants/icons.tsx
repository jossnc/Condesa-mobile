import { Feather, Ionicons } from "@expo/vector-icons";

export const icons = {
    index: (props: any) => <Feather name="home" size={24} {...props} />,
    servicios: (props: any) => <Feather name="truck" size={24} {...props} />,
    sucursal: (props: any) => <Ionicons name="storefront-outline" size={24} {...props} />,
};

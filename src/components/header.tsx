import { Feather } from "@expo/vector-icons"; // Importa ícones
import { useState } from "react"; // Hook de estado
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native"; // Componentes do React Native
import colors from "tailwindcss/colors"; // Cores

// Tipos das props
type HeaderProps = {
  title: string;
  cartQuantityItems?: number;
};

export function Header({ title, cartQuantityItems = 0 }: HeaderProps) {
  // Controla se a busca está aberta
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <View className="border-b border-slate-700 pb-5 mx-5">
      {/* Se a busca estiver fechada */}
      {!searchOpen ? (
        <View className="flex-row items-center">
          {/* Logo e título */}
          <View className="flex-1">
            <Image source={require("@/assets/logo.png")} className="h-8 w-32" />
            <Text className="text-white text-xl mt-2">{title}</Text>
          </View>

          {/* Ícones */}
          <View className="flex-row items-center gap-4">
            {/* Botão abrir busca */}
            <TouchableOpacity onPress={() => setSearchOpen(true)}>
              <Feather name="search" color={colors.white} size={24} />
            </TouchableOpacity>

            {/* Carrinho */}
            <TouchableOpacity className="relative">
              <Feather name="shopping-bag" color={colors.white} size={24} />

              {/* Quantidade de itens */}
              {cartQuantityItems > 0 && (
                <View className="absolute -top-2 -right-2 bg-lime-300 w-4 h-4 rounded-full items-center justify-center">
                  <Text className="text-xs">{cartQuantityItems}</Text>
                </View>
              )}
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        // Quando a busca está aberta
        <View className="flex-row items-center bg-slate-800 px-3 py-2">
          {/* Botão voltar */}
          <TouchableOpacity onPress={() => setSearchOpen(false)}>
            <Feather name="arrow-left" size={22} color={colors.white} />
          </TouchableOpacity>

          {/* Campo de busca */}
          <TextInput
            placeholder="Buscar..."
            className="flex-1 ml-3 text-white"
          />

          {/* Ícone */}
          <Feather name="search" size={20} color={colors.white} />
        </View>
      )}
    </View>
  );
}

import { StatusBar } from 'expo-status-bar'
import { ImageBackground, Text, View } from 'react-native'

import { styled } from 'nativewind'

import {
  useFonts,
  Roboto_400Regular as Roboto400Regular,
  Roboto_700Bold as Roboto700Bold,
} from '@expo-google-fonts/roboto'
import { BaiJamjuree_700Bold as BaiJamjuree700Bold } from '@expo-google-fonts/bai-jamjuree'

import bgBlurImg from './src/assets/bg-blur.png'
import StripesSVG from './src/assets/stripes.svg'
import NLWSpacetimeLogoSVG from './src/assets/nlw-spacetime-logo.svg'

const StyledStripesSVG = styled(StripesSVG)

export default function App() {
  const [hasLoadedFonts] = useFonts({
    Roboto_400Regular: Roboto400Regular,
    Roboto_700Bold: Roboto700Bold,
    BaiJamjuree_700Bold: BaiJamjuree700Bold,
  })

  if (!hasLoadedFonts) {
    return null
  }

  return (
    <ImageBackground
      source={bgBlurImg}
      className="flex-1 items-center justify-center bg-gray-900 px-8"
      imageStyle={{ position: 'absolute', left: '-100%' }}
    >
      <StyledStripesSVG className="absolute left-2" />

      <View className="flex-1 items-center justify-center gap-6">
        <NLWSpacetimeLogoSVG />
        <View className="space-y-2">
          <Text className="text-center font-title text-2xl leading-tight text-gray-50">
            Sua cápsula do tempo
          </Text>
          <Text className="text-center font-body text-base  leading-relaxed text-gray-100">
            Colecione momentos marcantes da sua jornada e compartilhe (se
            quiser) com o mundo!
          </Text>
        </View>
      </View>

      <StatusBar style="auto" translucent />
    </ImageBackground>
  )
}

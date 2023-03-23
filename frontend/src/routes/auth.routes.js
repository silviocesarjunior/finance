import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

const AuthStack = createNativeStackNavigator();

function AuthRoutes() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen name="SignUp" component={SignUp} 
      options={{ headerStyle: {
        backgroundColor: '#fb9518',
        borderBottomWidth: 1,
        borderBottomColor: '#00v94a'
      },
      headerTintColor: '#FFF',
      headerTitle: 'Voltar',
      headerBackTitleVisible: false, //é uma flexinha que fica no IOS pra voltar, então padronizando android e IOS está falso
      }}/>
    </AuthStack.Navigator>
  );
}

export default AuthRoutes;

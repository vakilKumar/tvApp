import React from 'react';
import { ErrorBoundary, useErrorBoundary } from 'react-error-boundary';
import { Text, TouchableOpacity, View } from 'react-native';

const ErrorFallback = ({ error }) => {
    const { resetBoundary } = useErrorBoundary();


    return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Something went wrong:</Text>
          <Text>{error.message}</Text>
          <TouchableOpacity onClick={resetBoundary}>
              <Text>Try again</Text>
          </TouchableOpacity>
        </View>
      );
}

const CustomErrorBoundary = ({ children }) => (
  <ErrorBoundary 
  FallbackComponent={ErrorFallback}
  onReset={()=> alert('call')}
  >
    {children}
  </ErrorBoundary>
);

export default CustomErrorBoundary;

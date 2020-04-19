import React from 'react';
import { Button, Text, View } from 'react-native';
import { useDispatchRequest } from '../hooks/useDispatchRequest';
import * as mockApi from '../api/mockapi';
import { removeRequestsByName } from '../store/request.slice';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../store/store';

export const Cancel = () => {
  const request = useDispatchRequest();
  const dispatch = useDispatch();
  const loading = useSelector(
    (state: AppState) => !!state.request.queue.idsByName.Cancel?.length,
  );

  return (
    <View style={{ flexDirection: 'row' }}>
      <Button
        title="start"
        onPress={() =>
          request({
            config: mockApi.index,
            timeout: 20000,
            name: 'Cancel',
            // limitation: RequestLimitation.LEADING,
          })
        }
      />
      <Button
        title="cancel"
        onPress={() => dispatch(removeRequestsByName({ name: 'Cancel' }))}
      />
      <View>
        <Text>{loading ? 'loading' : 'not loading'}</Text>
      </View>
    </View>
  );
};
import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {useGetChatsListQuery} from '@store/services';

import R from '@components/utils/R';
import Text from '@components/common/Text';
import FixedContainer from '@components/layout/FixedContainer';
import ScreenBoiler from '@components/layout/ScreenBoiler';
import SearchBar from '@components/common/SearchBar';
import FlatList from '@components/common/FlatList';
import {members} from '@components/constants';
import ButtonTs from '@components/common/Button';

const CoachesScreen = props => {
  const {navigation} = props;

  const {data, isLoading, isFetching} = useGetChatsListQuery();

  const [text, setText] = useState('');

  // const _renderList = ({item}) => {
  //   return <CoachCard item={item} isSendConnection />;
  // };

  return (
    <ScreenBoiler isSubHeader mainHeading={'List'} isBack={false}>
      <FixedContainer>
        <View style={R.styles.contentView}>
          <SearchBar
            placeholder={'Search'}
            onChange={data => {
              setText(data);
            }}
            value={text}
          />

          <ButtonTs
            value="Sign in"
            bgColor={R.color.primaryColor1}
            width={'30%'}
            size={'bsm'}
            gutterBottom={36}
            color={R.color.white}
            loader={isLoading}
            disabled={isLoading}
            loaderColor={R.color.white}
            onPress={() => null}
          />

          {/* <SkeletonLoader /> */}

          {/* <FlatList
            listData={members}
            renderList={_renderList}
            totalCount={10}
            noOfColumns={2}
          /> */}
        </View>
      </FixedContainer>
    </ScreenBoiler>
  );
};

export default CoachesScreen;

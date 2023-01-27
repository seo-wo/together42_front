import React, { useState, useEffect } from 'react';
import '@css/Rotation/Rotation.scss';
import LoadingSpinner from './Loading';
import { RotateUserResult } from './RotateUserResult';
import { getRotationArr } from './event_utils';
import { getAuth } from '@cert/AuthStorage';

export const RotateResult = () => {
  const [Loading, setLoading] = useState(true);
  const [arr, setArr] = useState([]);
  const intraId = getAuth() ? getAuth().id : null;

  const mainApi = async () => {
    setLoading(true); // api 호출 전에 true로 변경하여 로딩화면 띄우기
    try {
      const response = await getRotationArr();
      response.map((e) => {
        if (e.title == intraId && e.start != '') {
          arr.push(e.start);
        }
      });
      setLoading(false); // api 호출 완료 됐을 때 false로 변경하려 로딩화면 숨김처리
    } catch (error) {
      window.alert(error);
    }
  };
  console.log(arr);

  useEffect(() => {
    mainApi();
  }, []);

  return <div>{Loading ? <LoadingSpinner /> : <RotateUserResult arr={arr} intraId={intraId} />}</div>;
};

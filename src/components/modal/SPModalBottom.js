import React, {useState} from 'react';
import {Modal, StyleSheet, Pressable, TouchableOpacity} from 'react-native';
import SPText from '../../theme/SPText';
import {COLORS} from '../../theme';

const SPModalBottom = ({apps, setOpenModal, paymentHandler, loading}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={true}
      onRequestClose={() => {
        setOpenModal(false);
      }}>
      <Pressable style={styles.bottomView} onPress={() => setOpenModal(false)}>
        <Pressable onPress={() => {}} style={styles.modalView}>
          {apps.map((item, index) => {
            // let findLogo = payAppsData.filter(
            //   flt => flt.packageName === item.packageName,
            // );
            return (
              <TouchableOpacity
                onPress={() => paymentHandler(item)}
                style={styles.item}
                key={index}>
                {/* {findLogo?.length === 1 ? (
                      <Image
                        style={{
                          width: 50,
                          height: 50,
                          resizeMode: 'cover',
                          borderRadius: 50,
                        }}
                        source={{uri: findLogo[0]?.appLogo}}
                      />
                    ) : (
                      <SPText>{item.AppName}</SPText>
                    )} */}
                <SPText>{item.AppName}</SPText>
              </TouchableOpacity>
            );
          })}
        </Pressable>
      </Pressable>
    </Modal>
  );
};

const styles = StyleSheet.create({
  bottomView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  modalView: {
    backgroundColor: 'white',
    padding: 15,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  item: {
    marginHorizontal: 30,
    marginBottom: 30,
    borderWidth: 1,
    borderColor: COLORS.lightPrimary,
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 4,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default SPModalBottom;

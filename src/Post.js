import React, {useState} from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Alert,
  ScrollView,
  Image,
  TouchableOpacityBase,
} from 'react-native';
import Button from 'react-native-button';
import CheckBox from 'react-native-check-box';

import ImagePicker from 'react-native-image-picker/lib/commonjs';

const Post = (props) => {
  const [publishFreeSwitch, setPublishFreeSwitch] = useState(false);
  const [Number, setPrice] = useState('');
  const publishSwitch = 'typePublish';
  const [courseCoverData, setCourseCoverData] = useState('');
  const [selectedImage, setSelectedImage] = useState('');
  const [partdata, setpartdata] = useState({
    Category_Id: '',
    Sub_Category_Id: '',
    Title: '',
    Price: '',
    Latitude: '',
    Longitude: '',
    Address: '',
    Size: '',
    ExpDay: '',
    Description: '',
    Created_By: '',
  });
  const {
    Category_Id,
    Sub_Category_Id,
    Title,
    Price,
    Latitude,
    Longitude,
    Address,
    Size,
    ExpDay,
    Description,
    Created_By,
  } = partdata;

  const onCheckBox = (type) => {
    if (type === 'typePublish') {
      console.log('Check Box value', publishFreeSwitch);
      setPublishFreeSwitch(!publishFreeSwitch);
      if (publishFreeSwitch === false) {
        setPrice(1);
      } else {
        setPrice(0);
      }
    }
  };

  const showAlert = () => {
    Alert.alert('Product Add Successfully...');
  };

  const submitView = () => {
    let formdata = new FormData();
    console.log('check', Number);
    formdata.append('category_id', Category_Id);
    formdata.append('sub_category_id', Sub_Category_Id);
    formdata.append('title', Title);
    formdata.append('price', Price);
    formdata.append('address', Address);
    formdata.append('latitude', Latitude);
    formdata.append('longitude', Longitude);
    formdata.append('size', Size);
    formdata.append('expiry_days', ExpDay);
    formdata.append('description', Description);
    formdata.append('created_by', Created_By);
    formdata.append('is_phone_number', Number);
    formdata.append('productImg[]', {
      uri: courseCoverData.uri,
      type: courseCoverData.type,
      name: courseCoverData.fileName,
    });

    return fetch(`http://dev.codemeg.com/olx/api/add-ads`, {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      body: formdata,
    })
      .then((res) => {
        console.log('Check post section before json', res);
        res
          .json()
          .then((res) => {
            console.log('Check post section after json', res);
          })
          .catch((err) => {
            console.log('post Section err after josn', err);
          });
      })
      .catch((err) => {
        console.log('post Section err before josn', err);
      });
  };

  // Image Picker
  const selectPhotoTapped = () => {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response Of Course Cover = ', response);
      setCourseCoverData(response);

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {uri: response.uri};
        setSelectedImage(source);
      }
    });
  };

  return (
    <View>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.inputtitle}>Category Id</Text>
          <TextInput
            placeholder={'Category Id'}
            placeholderTextColor="#a3a3a3"
            color="#ffffff"
            style={styles.input}
            onChangeText={(text) =>
              setpartdata({...partdata, Category_Id: text})
            }
            value={Category_Id}
          />
          <Text style={styles.inputtitle}>Sub Category Id</Text>
          <TextInput
            placeholder={'Sub Category Id'}
            placeholderTextColor="#a3a3a3"
            color="#ffffff"
            style={styles.input}
            onChangeText={(text) =>
              setpartdata({...partdata, Sub_Category_Id: text})
            }
            value={Sub_Category_Id}
          />
          <Text style={styles.inputtitle}>Add Title</Text>
          <TextInput
            placeholder={'Add Title'}
            placeholderTextColor="#a3a3a3"
            color="#ffffff"
            style={styles.input}
            onChangeText={(text) => setpartdata({...partdata, Title: text})}
            value={Title}
          />
          <Text style={styles.inputtitle}>Product Location</Text>
          <TextInput
            placeholder={'Product Location'}
            placeholderTextColor="#a3a3a3"
            color="#ffffff"
            style={styles.input}
            onChangeText={(text) => setpartdata({...partdata, Address: text})}
            value={Address}
          />
          <Text style={styles.inputtitle}>Latitude</Text>
          <TextInput
            placeholder={'Latitude'}
            placeholderTextColor="#a3a3a3"
            color="#ffffff"
            style={styles.input}
            onChangeText={(text) => setpartdata({...partdata, Latitude: text})}
            value={Latitude}
          />
          <Text style={styles.inputtitle}>Longitude</Text>
          <TextInput
            placeholder={'Longitude'}
            placeholderTextColor="#a3a3a3"
            color="#ffffff"
            style={styles.input}
            onChangeText={(text) => setpartdata({...partdata, Longitude: text})}
            value={Longitude}
          />
          <Text style={styles.inputtitle}>Size</Text>
          <TextInput
            placeholder={'Enter Size'}
            placeholderTextColor="#a3a3a3"
            color="#ffffff"
            style={styles.input}
            onChangeText={(text) => setpartdata({...partdata, Size: text})}
            value={Size}
          />
          <Text style={styles.inputtitle}>Price </Text>
          <TextInput
            placeholder={'Price'}
            placeholderTextColor="#a3a3a3"
            color="#ffffff"
            style={styles.input}
            onChangeText={(text) => setpartdata({...partdata, Price: text})}
            value={Price}
          />
          <Text style={styles.inputtitle}>Expiry Days</Text>
          <TextInput
            placeholder={'Expiry Days'}
            placeholderTextColor="#a3a3a3"
            color="#ffffff"
            style={styles.input}
            onChangeText={(text) => setpartdata({...partdata, ExpDay: text})}
            value={ExpDay}
          />
          <Text style={styles.inputtitle}>Created By</Text>
          <TextInput
            placeholder={'Created By'}
            placeholderTextColor="#a3a3a3"
            color="#ffffff"
            style={styles.input}
            onChangeText={(text) =>
              setpartdata({...partdata, Created_By: text})
            }
            value={Created_By}
          />
          <Text style={styles.inputtitle}>Product Description</Text>
          <View style={styles.textAreaContainer}>
            <TextInput
              placeholder={'Enter Description'}
              placeholderTextColor="#a3a3a3"
              color="#ffffff"
              style={styles.textArea}
              numberOfLines={10}
              multiline={true}
              onChangeText={(text) =>
                setpartdata({...partdata, Description: text})
              }
              value={Description}
            />
          </View>
          <TouchableOpacity
            onPress={() => {
              selectPhotoTapped();
            }}>
            <View style={styles.photoContainer}>
              <Image source={require('../src/img/photo.jpg')} />
              <Text
                style={{
                  color: '#FFF',
                  margin: 6,
                }}>
                Add Photo
              </Text>
              {/* <TextInput value={selectedImage}></TextInput> */}
            </View>
          </TouchableOpacity>
          <View style={styles.checkboxInput}>
            <CheckBox
              isChecked={publishFreeSwitch}
              checkBoxColor={'#ffffff'}
              onClick={() => {
                onCheckBox(publishSwitch);
              }}
            />
            <Text style={styles.label}>
              Show Phone Number to users for this ad only.
            </Text>
          </View>
          <TouchableOpacity>
            <View>
              <Button
                style={styles.button}
                onPress={() => {
                  showAlert(), submitView(), props.navigation.navigate('Login');
                }}>
                Post
              </Button>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
    justifyContent: 'center',
    backgroundColor: '#131c2a',
  },
  button: {
    alignItems: 'center',
    height: 50,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#f6513e',
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  checkboxInput: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  label: {
    margin: 6,
    color: '#ffffff',
  },
  inputtitle: {
    fontSize: 20,
    paddingBottom: 10,
    color: '#ffffff',
  },
  text: {
    textAlign: 'right',
    fontSize: 20,
    color: '#fa4b3f',
    paddingBottom: 15,
  },
  btmtext: {
    textAlign: 'center',
    fontSize: 17,
    paddingTop: 15,
  },
  buttonContainer: {
    flex: 1,
    paddingLeft: 10,
  },
  input: {
    alignItems: 'center',
    height: 50,
    padding: 10,
    fontSize: 17,
    borderWidth: 1,
    borderRadius: 16,
    backgroundColor: '#1d2a3d',
    borderColor: '#455f88',
    marginBottom: 22,
  },
  textArea: {
    height: 70,
    justifyContent: 'flex-start',
    fontSize: 17,
    marginBottom: 60,
  },
  textAreaContainer: {
    backgroundColor: '#1d2a3d',
    borderColor: '#455f88',
    borderWidth: 1,
    padding: 5,
    borderRadius: 16,
    marginBottom: 22,
  },
  photoContainer: {
    backgroundColor: '#1d2a3d',
    borderColor: '#455f88',
    borderWidth: 1,
    padding: 24,
    width: 130,
    borderRadius: 16,
    marginBottom: 22,
  },
});

export default Post;

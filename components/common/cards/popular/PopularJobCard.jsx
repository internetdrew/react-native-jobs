import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import styles from './popularjobcard.style';

const PopularJobCard = ({ item, selectedJob, handleCardPress }) => {
  const empLogo = item?.employer_logo;

  return (
    <TouchableOpacity
      style={styles.container(selectedJob, item)}
      // onPress={() => console.log(item?.job_title)}
    >
      <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
        <Image
          style={styles.logoImage}
          source={{
            uri: empLogo
              ? empLogo
              : 'https://as2.ftcdn.net/v2/jpg/05/05/61/73/1000_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg',
          }}
          resizeMode='contain'
        />
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>
        {item?.employer_name}
      </Text>

      <View style={styles.infoContainer}>
        <Text style={styles.jobName(selectedJob, item)}>{item?.job_title}</Text>
        <Text style={styles.location}>{item?.job_country}-based</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PopularJobCard;

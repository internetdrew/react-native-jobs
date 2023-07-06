import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { DEFAULT_COMPANY_LOGO_URL } from '@env';

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
            uri: empLogo ? empLogo : DEFAULT_COMPANY_LOGO_URL,
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

import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { DEFAULT_COMPANY_LOGO_URL } from '@env';

import styles from './nearbyjobcard.style';

const NearbyJobCard = ({ job, handleNavigate }) => {
  const empLogo = job?.employer_logo;

  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          style={styles.logoImage}
          source={{
            uri: empLogo ? empLogo : DEFAULT_COMPANY_LOGO_URL,
          }}
          resizeMode='contain'
        />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.jobName}>{job?.job_title}</Text>
        <Text style={styles.jobType}>{job?.job_employment_type}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default NearbyJobCard;

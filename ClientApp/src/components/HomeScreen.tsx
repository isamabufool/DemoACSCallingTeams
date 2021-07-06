// © Microsoft Corporation. All rights reserved.
import React, { useState }  from 'react';
import { Stack, PrimaryButton, Icon, Image, IImageStyles, TextField } from '@fluentui/react';
import { VideoCameraEmphasisIcon } from '@fluentui/react-icons-northstar';
import heroSVG from '../assets/hero.svg';
import basicCreditCardSVG from '../assets/basicCreditCard.svg';
import { v1 as createGUID } from 'uuid';
import {
  imgStyle,
  containerTokens,
    listStyle,
    Itemboxhid,
  iconStyle,
  headerStyle,
  upperStackTokens,
  videoCameraIconStyle,
  buttonStyle,
  nestedStackTokens,
  upperStackStyle, listItemStyle
} from './styles/HomeScreen.styles';

export interface HomeScreenProps {
  startCallHandler(groupId: string): void;
  joinTeamsMeeting(meetingLink: string): void;
}

const imageStyleProps: IImageStyles = {
  image: {
    height: '100%',
    width: '100%'
  },
  root: {}
};

export const HomeScreen = (props: HomeScreenProps): JSX.Element => {
  const [meetingUrl, setMeetingUrl] = useState('');
  const groupId: string = createGUID();
  const iconName = 'SkypeCircleCheck';
  const imageProps = { src: heroSVG.toString() };
  const imagePropsCard = { src: basicCreditCardSVG.toString() };
  const headerTitle = 'Banking communication service';
  const startCallButtonText = 'Start a call';
  const joinTeamsCallText = 'Join a Teams Meeting';
  const listItems = [
    'Customize with your web stack',
    'Connect with users with seamless collaboration across web',
    'High quality, low latency capabilities for an uninterrupted calling experience',
    'Learn about this'
  ];
    return (

    <Stack horizontal horizontalAlign="center" verticalAlign="center" tokens={containerTokens}>
          <Stack className={upperStackStyle} tokens={upperStackTokens}>
            
              <div className={headerStyle}>{headerTitle}</div>
            
           
   
        <Stack.Item>
          <PrimaryButton disabled={meetingUrl === ''} onClick={() => props.joinTeamsMeeting(meetingUrl)}>
            <VideoCameraEmphasisIcon className={videoCameraIconStyle} size="medium" />
            {joinTeamsCallText}
          </PrimaryButton>
        <TextField onChange={(event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => { newValue === undefined ? setMeetingUrl('') : setMeetingUrl(newValue)}} />
        </Stack.Item>
      </Stack>
      <Image
        alt="Welcome to the Azure Communication Services Calling sample app"
        className={imgStyle}
        styles={imageStyleProps}
        {...imageProps}
            />

            <Image
                alt="Welcome to the Azure Communication Services Calling sample app"
                className={imgStyle}
                styles={imageStyleProps}
                {...imagePropsCard}
            />
    </Stack>
  );
};
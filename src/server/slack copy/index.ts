/* eslint-disable import/no-duplicates */

import { WebClient } from '@slack/web-api';
import { RTMClient } from '@slack/rtm-api';
import { RTMMock, WebMock } from '../../test/lib/slackMock';
import config from '../config';
/* eslint-enable import/no-duplicates */

const { slackMock } = config.misc;

console.debug('Slack mockApi loaded', slackMock);

export default {
  rtm: slackMock ? new RTMMock() : new RTMClient(config.slack.api_token),
  wbc: slackMock ? new WebMock() : new WebClient(config.slack.api_token),
};

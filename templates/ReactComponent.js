const template = `import React from 'react';
import styled from '@emotion/styled';
import { useAppDispatch } from '../redux/store';
import { useQuery, useMutation } from 'apollo-client';
import { media, useMobileMedia } from '../utils/MediaQuery';
import Text from '..elements/Text';
import Flex from '../elements/Flex';
import Colors from '../styles/Colors';

const Container = styled.div``;

type ReactComponentProps = {};

const ReactComponent: React.FC<ReactComponentProps> = () => {
  /** State */

  /** Hooks */
  const isMobile = useMobileMedia();

  /** Actions */
  const dispatch = useAppDispatch();

  /** GraphQL */
  type GraphQLParams = {};
  type GraphQLData = {};

  /** Effects */

  /** Render */
  return (
    <Container>
      <Text>Component Template</Text>
    </Container>
  )
}

export default ReactComponent;
`;

export default template;

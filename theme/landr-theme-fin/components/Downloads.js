import React from 'react';
import _ from 'lodash';
import styled, { withTheme } from 'styled-components';
import { Flex, Box, Container, Text, Link, Heading, Image } from 'resin-components';
import Button from '../components/Button';

import blueFill from '../images/blue-fill.svg';
import downloadIcon from '../images/downloadIcon.svg'

function createMarkup(html) {
  return { __html: html };
}

const DownloadsWrapper = styled(Box)`
  background-image: url(${blueFill});
  background-repeat: no-repeat;
  background-position: left;
  background-size: auto;
`;

const StyledLink = styled(Link)`
  && {
    font-size: 14px;
    color: #2a506f;
    &:hover {
      color: #2a506f;
    }
  }
`;

const TableWrapper = styled(Flex)`
  box-shadow: -10px 9px 21px 0 rgba(152, 173, 227, 0.08);
  border: solid 1px ${props => props.theme.colors.primary.main};
  border-radius: ${props => props.theme.radius}px;
  background-color: #ffffff;
  position: relative;

  &:before {
    content: ' ';
    width: 0;
    height: 0;
    border-left: 12px solid transparent;
    border-right: 12px solid transparent;
    border-bottom: 12px solid ${props => props.theme.colors.primary.main};

    position: absolute;
    left: calc(50% - 6px);
    top: -12px;
    z-index: 2;
    }
    &:after {
      content: ' ';
      width: 0;
      height: 0;
      border-left: 12px solid transparent;
      border-right: 12px solid transparent;
      border-bottom: 12px solid #fff;

      position: absolute;
      left: calc(50% - 6px);
      top: -11px;
      z-index: 3;
      }
  }

`;

const Table = styled.table`
  width: 100%;

  > tr {
    > th,
    td {
      text-align: left;
    }
    > th {
      padding: 14px 20px 14px 0;
      border-top: 1px solid transparent;
      border-bottom: 1px solid rgba(214, 221, 242, 0.5);
      border-right: 1px solid transparent;
      border-left: 1px solid transparent;
    }
    > td {
      padding: 20px 20px 20px 0;
      border-top: 1px solid rgba(214, 221, 242, 0.5);
      border-right: 1px solid transparent;
      border-left: 1px solid transparent;
    }
  }
`;

export default withTheme(props => {
  
  return (
    <DownloadsWrapper py={120}>
      <Container align="center">
        <Heading.h5
          id="download"
          fontSize={14}
          mb={16}
          color={props.theme.colors.primary.main}
        >
          DOWNLOAD
        </Heading.h5>
        <Heading.h1 fontSize={[20,25,30,34]} mb={40}>
          Get your assets
        </Heading.h1>
        <TableWrapper justify="center">
          <Box
            width={[1, 1, 1, 2 / 3]}
            py={[40, 40, 40, 80]}
            px={[20, 20, 20, 0]}
          >
            <Table>
              <tr>
                <th>
                  <Heading.h6
                    fontSize={12}
                    color='#527699'
                >
                  ASSET
                  </Heading.h6>
                </th>
                <th>
                  <Heading.h6
                    fontSize={12}
                    color='#527699'
                  >
                    OS
                  </Heading.h6>
                </th>
                <th>
                  <Heading.h6
                    fontSize={12}
                    color='#527699'
                  >
                    ARCH
                  </Heading.h6>
                </th>
                <th>&nbsp;</th>
              </tr>
                {props.settings.releases.map((asset, index) => (
                  <tr key={index}>
                    <td>
                      <Text fontSize={14}>{asset.text}</Text>
                    </td>
                    <td>
                      <Text fontSize={14}>{asset.os}</Text>
                    </td>
                    <td>
                      <Text fontSize={14}>{asset.arch}</Text>
                    </td>
                    <td>
                      <Flex justify="flex-end">
                        <Button round primary>
                          <StyledLink
                            mx={3}
                            blank
                            href={asset.href}
                          >
                            <Flex>
                              <Image alignItems='center' src={downloadIcon} mr={3} />
                              Download
                            </Flex>
                          </StyledLink>
                        </Button>
                      </Flex>
                    </td>
                  </tr>
                ))}
            </Table>
            <Box style={{textAlign: 'left'}} mt='79px'>
              <Text.span fontSize='14px'>
                Looking for{' '}
                <Link href={'https://github.com/resin-io/etcher#debian-and-ubuntu-based-package-repository-gnulinux-x86x64'}>Debian (.deb) packages</Link>
                {' '}or{' '}
                <Link href={'https://github.com/resin-io/etcher#redhat-rhel-and-fedora-based-package-repository-gnulinux-x86x64'}>Red Hat (.rpm) packages</Link>
                ?
              </Text.span>
            </Box>
          </Box>
        </TableWrapper>
        
      </Container>
    </DownloadsWrapper>
  );
});
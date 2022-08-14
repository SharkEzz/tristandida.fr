import { Box, Icon, SimpleGrid, Text } from '@chakra-ui/react';
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaPhp,
  FaNodeJs,
  FaDocker,
  FaReact,
  FaAtom,
  FaLaravel,
} from 'react-icons/fa';
import APIPlatformIcon from '../../../assets/icons/APIPlatformIcon';
import GolangIcon from '../../../assets/icons/GolangIcon';
import HelmIcon from '../../../assets/icons/HelmIcon';
import K8SIcon from '../../../assets/icons/K8SIcon';
import NextJsIcon from '../../../assets/icons/NextJSIcon';
import ProxmoxIcon from '../../../assets/icons/ProxmoxIcon';
import SymfonyIcon from '../../../assets/icons/SymfonyIcon';
import TypescriptIcon from '../../../assets/icons/TypescriptIcon';
import Section from '../../Section';

export default function Skills() {
  return (
    <Section title="Skills" id="skills">
      <SimpleGrid spacing={10} columns={[2, 3, 4, null, 6]}>
        <Box textAlign="center">
          <Icon as={FaHtml5} height="64px" width="64px" />
          <Text mt={1}>HTML</Text>
        </Box>
        <Box textAlign="center">
          <Icon as={FaCss3} height="64px" width="64px" />
          <Text mt={1}>CSS</Text>
        </Box>
        <Box textAlign="center">
          <Icon as={FaJs} height="64px" width="64px" />
          <Text mt={1}>JS (ES6+)</Text>
        </Box>
        <Box textAlign="center">
          <Icon as={TypescriptIcon} height="56px" width="64px" />
          <Text mt={1}>TypeScript</Text>
        </Box>
        <Box textAlign="center">
          <Icon as={FaPhp} height="64px" width="64px" />
          <Text mt={1}>PHP</Text>
        </Box>
        <Box textAlign="center">
          <Icon as={FaNodeJs} height="64px" width="64px" />
          <Text mt={1}>NodeJS</Text>
        </Box>
        <Box textAlign="center">
          <Icon as={GolangIcon} />
          <Text mt={1}>Go</Text>
        </Box>
        <Box textAlign="center">
          <Icon as={SymfonyIcon} />
          <Text mt={1}>Symfony</Text>
        </Box>
        <Box textAlign="center">
          <Icon as={FaLaravel} height="56px" width="64px" />
          <Text mt={1}>Laravel</Text>
        </Box>
        <Box textAlign="center">
          <Icon as={K8SIcon} />
          <Text mt={1}>Kubernetes</Text>
        </Box>
        <Box textAlign="center">
          <Icon as={HelmIcon} />
          <Text mt={1}>Helm</Text>
        </Box>
        <Box textAlign="center">
          <Icon as={FaDocker} height="56px" width="64px" />
          <Text mt={1}>Docker</Text>
        </Box>
        <Box textAlign="center">
          <Icon as={APIPlatformIcon} height="56px" width="64px" />
          <Text mt={1}>API Platform</Text>
        </Box>
        <Box textAlign="center">
          <Icon as={FaReact} height="56px" width="64px" />
          <Text mt={1}>React</Text>
        </Box>
        <Box textAlign="center">
          <Icon as={FaAtom} height="56px" width="64px" />
          <Text mt={1}>Redux</Text>
        </Box>
        <Box textAlign="center">
          <Icon as={FaAtom} height="56px" width="64px" />
          <Text mt={1}>React Saga</Text>
        </Box>
        <Box textAlign="center">
          <Icon as={NextJsIcon} height="56px" width="64px" />
          <Text mt={1}>NextJS</Text>
        </Box>
        <Box textAlign="center">
          <Icon as={ProxmoxIcon} height="56px" width="64px" />
          <Text mt={1}>Proxmox</Text>
        </Box>
      </SimpleGrid>
    </Section>
  );
}

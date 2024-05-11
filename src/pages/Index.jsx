import { Box, Button, Container, Flex, Heading, Icon, Image, Input, Link, SimpleGrid, Stack, Text, VStack } from "@chakra-ui/react";
import { FaCheckCircle, FaPhone, FaRegSmileBeam, FaTools, FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Box as="header" bg="white" boxShadow="sm" position="sticky" top={0} zIndex={3}>
        <Flex as="nav" align="center" justify="space-between" wrap="wrap" p={4}>
          <Heading as="h1" size="lg" letterSpacing={"tighter"}>
            PoolProFix
          </Heading>
          <Stack direction="row" spacing={4}>
            <Link href="#services">Services</Link>
            <Link href="#testimonials">Testimonials</Link>
            <Link href="#about">About Us</Link>
            <Link href="#contact">Contact</Link>
          </Stack>
        </Flex>
      </Box>

      <Box as="section" bgImage="https://images.unsplash.com/photo-1551672746-89991811c186?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzcGFya2xpbmclMjBwb29sfGVufDB8fHx8MTcxNTQ0NTUxNXww&ixlib=rb-4.0.3&q=80&w=1080" bgSize="cover" bgPos="center" h="70vh" display="flex" alignItems="center" justifyContent="center">
        <VStack>
          <Heading as="h2" size="2xl" color="white" textShadow="2px 2px 2px rgba(0,0,0,0.6)">
            Bringing Pools Back to Life
          </Heading>
          <Text fontSize="xl" color="whiteAlpha.800" textShadow="1px 1px rgba(0,0,0,0.5)">
            Expert care and maintenance for your swimming pool.
          </Text>
        </VStack>
      </Box>

      <Box as="section" id="services" p={10}>
        <Heading as="h3" size="lg" mb={6}>
          Our Services
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <ServiceBox icon={FaTools} title="Repair" description="Fix leaks, pumps, and filters." />
          <ServiceBox icon={FaCheckCircle} title="Maintenance" description="Regular cleaning and chemical checks." />
          <ServiceBox icon={FaRegSmileBeam} title="Seasonal Preparation" description="Get your pool summer-ready or winter-proofed." />
        </SimpleGrid>
      </Box>

      <Box as="section" id="testimonials" bg="gray.100" p={10}>
        <Heading as="h3" size="lg" mb={6}>
          Testimonials
        </Heading>
        <Stack spacing={8}>
          <Testimonial text="PoolProFix turned our backyard into a paradise! Highly recommend their professional team." author="Jane Doe" />
          <Testimonial text="Excellent service every time. They know what they're doing." author="John Smith" />
        </Stack>
      </Box>

      <Box as="section" id="about" p={10}>
        <Heading as="h3" size="lg" mb={6}>
          About Us
        </Heading>
        <Text fontSize="md">Founded in 2005, PoolProFix is dedicated to maintaining the health and beauty of your pool. Our experienced team ensures top-notch service.</Text>
        <Image src="https://images.unsplash.com/photo-1516880711640-ef7db81be3e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb29sJTIwc2VydmljZSUyMHRlYW18ZW58MHx8fHwxNzE1NDQ1NTE1fDA&ixlib=rb-4.0.3&q=80&w=1080" mt={4} borderRadius="md" />
      </Box>

      <Box as="section" id="contact" p={10} bg="gray.50">
        <Heading as="h3" size="lg" mb={6}>
          Contact Us
        </Heading>
        <Stack as="form" spacing={4}>
          <Input placeholder="Your Name" />
          <Input placeholder="Email Address" />
          <Input placeholder="Message" h="100px" as="textarea" />
          <Button colorScheme="blue" size="lg">
            Submit
          </Button>
        </Stack>
      </Box>

      <Box as="footer" bg="gray.800" color="gray.400" p={4}>
        <Flex justify="space-between" align="center">
          <Text>&copy; 2023 PoolProFix. All rights reserved.</Text>
          <Stack direction="row" spacing={4}>
            <Icon as={FaTwitter} />
            <Icon as={FaFacebookF} />
            <Icon as={FaInstagram} />
          </Stack>
        </Flex>
      </Box>
    </Container>
  );
};

const ServiceBox = ({ icon, title, description }) => (
  <VStack spacing={3}>
    <Icon as={icon} w={10} h={10} color="blue.500" />
    <Text fontWeight="bold" fontSize="lg">
      {title}
    </Text>
    <Text textAlign="center">{description}</Text>
  </VStack>
);

const Testimonial = ({ text, author }) => (
  <Box p={4} bg="white" boxShadow="md" borderRadius="md">
    <Text>{text}</Text>
    <Text fontWeight="bold" mt={2}>
      {author}
    </Text>
  </Box>
);

export default Index;

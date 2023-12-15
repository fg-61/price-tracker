"use client"
import { ActionIcon, Box, Button, Center, Checkbox, Chip, Fieldset, Flex, Grid, Group, NumberInput, SimpleGrid, Stack, Switch, Text } from "@mantine/core"
import { useForm } from "@mantine/form"
import '@mantine/core/styles.css';
import RichTextEditor from "@/components/RichTextEditor";
import { IconPlus, IconTrash } from "@tabler/icons-react";
import { randomId } from "@mantine/hooks";
import { useState } from "react";

type SpanNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

export type FormType = { richTextSectionName: string, desktopSpan: SpanNumber, mobileSpan: SpanNumber, order: number, phoneOrder: number, text: string }
const Home = () => {
  const [simpleGridsNumber, setSimpleGridsNumber] = useState(1)
  const form = useForm<{ richTexts: FormType[] }>({
    initialValues: {
      richTexts: []
    }
  })

  return (
    <div style={{ height: 400, margin: 20 }}>
      <Flex gap={20} my={20} direction='column'>
        <Group mt="xs">
          <Checkbox value={1} label="1" onChange={() => setSimpleGridsNumber(1)} checked={simpleGridsNumber === 1} />
          <Checkbox value={2} label="2" onChange={() => setSimpleGridsNumber(2)} checked={simpleGridsNumber === 2} />
          <Checkbox value={3} label="3" onChange={() => setSimpleGridsNumber(3)} checked={simpleGridsNumber === 3} />
          <Checkbox value={4} label="4" onChange={() => setSimpleGridsNumber(4)} checked={simpleGridsNumber === 4} />
        </Group>
        <Group gap={10}>
          <Button
            variant="light"
            leftSection={<IconPlus />}
            onClick={() => form.insertListItem('richTexts', { richTextSectionName: randomId(), desktopSpan: 12 as SpanNumber, mobileSpan: 12 as SpanNumber, order: 1, phoneOrder: 1, text: "" })}
          >
            Alan Ekle
          </Button>
          <Button
            variant="light"
            color="red"
            leftSection={<IconPlus />}
            onClick={() => form.insertListItem('richTexts', { richTextSectionName: randomId(), desktopSpan: 12 as SpanNumber, mobileSpan: 12 as SpanNumber, order: 1, phoneOrder: 1, text: "" })}
          >
            Alan 2 Ekle
          </Button>
          <Button
            variant="light"
            color="pink"
            leftSection={<IconPlus />}
            onClick={() => form.insertListItem('richTexts', { richTextSectionName: randomId(), desktopSpan: 12 as SpanNumber, mobileSpan: 12 as SpanNumber, order: 1, phoneOrder: 1, text: "" })}
          >
            Alan 3 Ekle
          </Button>
        </Group>
        <Grid gutter={10}>
          {form.values.richTexts.map((_, index) =>
            <Grid.Col span={{ base: 12, xs: 6, sm: 4, md: 3, xl: 2 }}>
              <Fieldset
                variant="filled"
                legend={
                  <Flex align='center' gap={10} fw={700} px={15}>
                    <ActionIcon variant="outline" color="red" size='sm' onClick={() => form.removeListItem('richTexts', index)}><IconTrash size={16} /></ActionIcon>
                    Richtext {index + 1}
                  </Flex>
                }
              >
                <NumberInput label='Desktop Genişlik' placeholder="Minimum: 1 - Maximum: 12" min={1} max={12} hideControls {...form.getInputProps(`richTexts.${index}.desktopSpan`)} styles={{ label: { fontSize: 12, fontWeight: 600, color: '#909090' } }} />
                <NumberInput label='Mobil Genişlik' placeholder="Minimum: 1 - Maximum: 12" min={1} max={12} hideControls {...form.getInputProps(`richTexts.${index}.mobileSpan`)} styles={{ label: { fontSize: 12, fontWeight: 600, color: '#909090' } }} />
                <NumberInput label='Yerleşim Sırası' placeholder="Min: 1" min={1} hideControls {...form.getInputProps(`richTexts.${index}.order`)} styles={{ label: { fontSize: 12, fontWeight: 600, color: '#909090' } }} />
                <NumberInput label='Mobildeki Yerleşim Sırası' placeholder="Min: 1" min={1} hideControls {...form.getInputProps(`richTexts.${index}.phoneOrder`)} styles={{ label: { fontSize: 12, fontWeight: 600, color: '#909090' } }} />
              </Fieldset>
            </Grid.Col>
          )}
        </Grid>
      </Flex>
      {!!form.values.richTexts.length && (
        <Grid gutter={4} my={40}>
          {form.values.richTexts.map((richtText, index) =>
            <Grid.Col key={index} span={{ base: 12, xs: richtText.mobileSpan, md: richtText.desktopSpan }}>
              <Stack h='100%' justify="center">
                <RichTextEditor
                  key={index}
                  id={`${index}`}
                  setValue={(value) => { form.setFieldValue(`richTexts.${index}.text`, value) }}
                  value={form.values.richTexts[index].text}
                />
              </Stack>
            </Grid.Col>
          )}
        </Grid>
      )}

      {/* <Grid>
        {form.values.richTexts.map(({ desktopSpan, mobileSpan, order, phoneOrder, text }, index) =>
        <Grid.Col key={index} span={{ base: mobileSpan, md: desktopSpan }} order={{ base: phoneOrder, md: order }}>
        <Box pos='relative'>
        <Chip.Group>
        <Group justify="center">
        <Chip value="1">Single chip</Chip>
        <Chip value="2">Can be selected</Chip>
        <Chip value="3">At a time</Chip>
        </Group>
        </Chip.Group>
        
              <RichTextEditor key={index} id={`${index}`} setValue={(value) => { form.setFieldValue(`richTexts.${index}.text`, value) }} value={form.values.richTexts[index].text} height={800} width={1100} />
            </Box>
          </Grid.Col>
        )}
      </Grid> */}

    </div>
  )
}
export default Home

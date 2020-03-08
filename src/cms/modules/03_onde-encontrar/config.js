const fields = [
  {
    label: "Template Key",
    name: "templateKey",
    widget: "hidden",
    default: "onde-encontrar",
  },
  { label: "Local", name: "title", widget: "string" },
  {
    label: "Nacional",
    name: "nacional",
    widget: "boolean",
    default: true,
    required: false,
  },
  { label: "Body", name: "body", widget: "markdown" },
  {
    label: "Metadata",
    name: "metadata",
    widget: "object",
    required: false,
    fields: [
      { label: "Updated Date", name: "dateModified", widget: "datetime" },
      {
        label: "Cover",
        name: "cover",
        widget: "image",
        default: "/img/ogimage.jpg",
      },
      {
        label: "Headline",
        name: "headline",
        widget: "string",
        required: false,
        pattern: [".{0,110}", "limit text to 110 characteres"],
      },
    ],
  },
]

export default {
  label: "Onde Encontrar",
  name: "onde_encontrar",
  folder: "src/pages/onde-encontrar",
  create: true,
  slug: "{{slug}}",
  fields,
}

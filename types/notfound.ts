import type {
  KeyTextField,
  LinkField,
  PrismicDocumentWithUID,
} from '@prismicio/types';

export type NotFoundProps = PrismicDocumentWithUID<{
  titleTag: KeyTextField;
  metaDescription: KeyTextField;
  introPrefix: KeyTextField;
  introTitle: KeyTextField;
  introDescription: KeyTextField;
  primaryButtonLabel: KeyTextField;
  primaryButtonLink: LinkField;
}>;

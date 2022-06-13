import React from 'react';
import { Helmet } from 'react-helmet';

interface IMetatag {
  title?: string;
  description?: string;
}

const PROJECT_NAME = 'Coworkers | ';

const Metatag = ({ title, description }: IMetatag): React.ReactElement => (
  <Helmet>
    <meta charSet="utf-8" />
    <title>{`${PROJECT_NAME} ${title}`}</title>
    {description && <meta name="description" content={description} />}
  </Helmet>
);

Metatag.defaultProps = { title: '', description: '' };

export default Metatag;

import React from 'react'
import PropTypes from 'prop-types'
import { ProjectsTemplate } from '../../templates/projects'

const ProjectPagePreview = ({ entry, widgetFor }) => (
  <ProjectsTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

ProjectPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ProjectPagePreview

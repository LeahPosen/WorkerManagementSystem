import * as React from "react"
import { observer } from "mobx-react-lite"
import { useNavigate } from "react-router-dom"
import { Button } from "@mui/material"
import AddIcon from "@mui/icons-material/Add"
import Workers from "./Workers"
import Edit from "./Edit"
import AddTagRole from "./Tag"
import PropTypes from "prop-types"
import Box from "@mui/material/Box"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Typography from "@mui/material/Typography"
import { Link, matchPath, useLocation } from "react-router-dom"
import { StaticRouter } from "react-router-dom/server"

function useRouteMatch(patterns) {
  const { pathname } = useLocation()

  for (let i = 0; i < patterns.length; i += 1) {
    const pattern = patterns[i]
    const possibleMatch = matchPath(pattern, pathname)
    if (possibleMatch !== null) {
      return possibleMatch
    }
  }

  return null
}
const Home = observer(() => {
  const routeMatch = useRouteMatch(["/", "/add", "/tags", "/edit/:id", "/login"])
  const currentTab = routeMatch?.pattern?.path

  return (
    <React.Fragment>
      <Box sx={{ width: "100%" }}>
        <Tabs
          value={currentTab}
          sx={{ width: "100%", margin: 0, justifyContent: "space-between", position: "sticky" }}
        >
          <Tab sx={{ width: "20%" }} label="All workers" value="/" to="/" component={Link} />
          <Tab
            sx={{ width: "20%" }}
            label="Edit worker"
            value="/edit/:id"
            component={Link}
            disabled
          />
          <Tab sx={{ width: "20%" }} label="Add worker" value="/add" to="/add" component={Link} />
          <Tab sx={{ width: "20%" }} label="Add tag" value="/tags" to="/tags" component={Link} />
          <Tab sx={{ width: "20%" }} label="Login" value="/login" to="/login" component={Link} />
        </Tabs>
      </Box>
    </React.Fragment>
  )
})

export default Home

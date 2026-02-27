export const WarhammerProfile: React.FC<{
  profile: React.ReactNode
  cost: string
}> = ({ profile, cost }) => (
  <>
    <div className="flex-wrapper items-start content-stretch justify-between py-4">
      <div>
        <div className="flavor">Profile:</div>
        {profile}
      </div>

      <div>
        <div className="flavor">Cost:</div>
        <div className="font-bold">{cost}</div>
      </div>
    </div>

    <hr />
  </>
)
